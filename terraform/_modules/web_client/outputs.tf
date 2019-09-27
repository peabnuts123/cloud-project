# Output the cloudfront domain, so we know how to access the distribution
#   We will also need this to add as a CNAME DNS record for our domain
output "cloudfront_domain_name" {
  value = "${aws_cloudfront_distribution.web_client.domain_name}"
}

# Name of the S3 bucket, so we can upload our files to it after provisioning
output "s3_bucket_name" {
  value = "${aws_s3_bucket.web_client.bucket}"
}