# LOCALS
locals {
  # Unique ID for the origin
  origin_id = "${var.project_tag}_${var.domain_name}"
}

# Cloudfront distribution
#   Woah boy does cloudfront need a loooooot of configuration!
resource "aws_cloudfront_distribution" "web_client" {
  # Whether this resource is ... enabled
  enabled             = true
  # Domain names that will be pointing at this distribution,
  #   other than the auto-generated "______.cloudfront.net"
  aliases             = ["${var.domain_name}"]
  # Default file to serve when requesting `/`
  default_root_object = "index.html"

  # Pricing tier - see https://aws.amazon.com/cloudfront/pricing/ for details
  # Basically just US / Canada - should be faster to provision
  #   PriceClass_100 takes about ~20m to geo-replicate
  #   PriceClass_All takes about ~45m to geo-replicate
  price_class         = "PriceClass_100"


  # Request origin config
  origin {
    domain_name = "${aws_s3_bucket.web_client.bucket_regional_domain_name}"
    origin_id   = "${local.origin_id}"
  }

  # Rewrite all 404s to index.html
  custom_error_response {
    error_code         = "404"
    response_code      = "200"
    response_page_path = "/index.html"
  }

  # Cache config
  # Most of this is just required defaults
  default_cache_behavior {
    allowed_methods        = ["HEAD", "GET", "OPTIONS"]
    cached_methods         = ["HEAD", "GET", "OPTIONS"]
    compress               = true
    viewer_protocol_policy = "redirect-to-https"
    target_origin_id       = "${local.origin_id}"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }
  }

  # Access restrictions
  # No restrictions, these are required fields
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  # AWS tags
  tags = {
    project = "${var.project_tag}"
  }

  # HTTPS certificate (from ACM)
  viewer_certificate {
    acm_certificate_arn = "${data.aws_acm_certificate.web_client.arn}"
    ssl_support_method = "sni-only"
  }
}
