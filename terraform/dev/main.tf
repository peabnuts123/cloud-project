# VARIABLES
variable "aws_access_key" {
  description = "AWS access key"
  type        = "string"
}
variable "aws_secret_key" {
  description = "AWS secret key"
  type        = "string"
}


# PROVIDER
provider "aws" {
  region     = "${var.aws_region}"
  access_key = "${var.aws_access_key}"
  secret_key = "${var.aws_secret_key}"
}


# MODULES
module "web_client" {
  source = "../_modules/web_client"

  aws_region  = "${var.aws_region}"
  domain_name = "${var.domain_name}"
  project_tag = "${var.project_tag}"
}

# OUTPUTS
output "s3_bucket_name" {
  value = "${module.web_client.s3_bucket_name}"
}

output "cloudfront_domain_name" {
  value = "${module.web_client.cloudfront_domain_name}"
}
