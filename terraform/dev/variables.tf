# VARIABLES
variable "aws_region" {
  description = "Region to create resources in"
  type        = "string"
}
variable "domain_name" {
  description = "URL for HTTPS certificate domain"
  type        = "string"
}
variable "project_tag" {
  description = "Project tag applied to each resource created i.e. project=____"
  type        = "string"
}
