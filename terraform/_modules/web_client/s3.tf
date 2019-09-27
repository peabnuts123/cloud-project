# RESOURCES
# S3 Bucket
resource "aws_s3_bucket" "web_client" {
  bucket = "${var.domain_name}"
  acl    = "public-read"
  region = "${var.aws_region}"

  # AWS tags
  tags = {
    project = "${var.project_tag}"
  }

  # Set up static site hosting in S3
  website {
    index_document = "index.html"
    error_document = "index.html"
  }

  # Add domain to CORS allowed origins
  cors_rule {
    allowed_methods = ["GET"]
    allowed_origins = ["${var.domain_name}"]
  }
}
