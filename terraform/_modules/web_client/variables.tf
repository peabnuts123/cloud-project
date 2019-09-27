# VARIABLES
variable "aws_region" {
  description = "AWS Region to create resources in e.g. us-east-1"
  type        = "string"
}
variable "domain_name" {
  description = "URL for HTTPS certificate domain"
  type        = "string"
}
variable "project_tag" {
  description = "Project tag applied to each resource created e.g. project=ego-cloud-project_dev. Will usually also include an environment name"
  type        = "string"
}
