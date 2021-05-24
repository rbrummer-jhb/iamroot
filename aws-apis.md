---
css: aws-apis
layout: aws-apis
permalink: /aws-apis/
---

# Section 1 | Getting Started

These notes are based of off this course:  
[https://www.udemy.com/course/aws-serverless-a-complete-introduction](https://www.udemy.com/course/aws-serverless-a-complete-introduction/)

Aside Microsoft Azure & Google Cloud Platform *(GCP)*, AWS:
* is a Market Leader
* has Aggressive Pricing *(reduction)*
* has the most Serverless Services
* has rapid innovation & new features

Create a free-tier AWS account *(1 year trial)*:  
[https://aws.amazon.com/](https://aws.amazon.com/)

We are going to look at **EC2** - **Elastic Cloud Computing**.
* It can be used to start instances of virtual servers.
    * You could install a web server, a PHP interpreter, etc  
    on these instances, and host a website.

## Serverless Development

Web App / Mobile App ⟸⟹ Backend *(REST API)* ⟸⟹ Server  
* More servers may be required with traffic spikes.
* Servers are online even if they're not needed.
* Server OS & software need to be updated.
* Servers could be over- or under-provisioned.

**AWS Lambda & API Gateway** handle business logic.  
**AWS DynamoDB** handles storage.  
**AWS Cognito** offers authentication.
**AWS S3, CloudFront & Route53** offer hosting.

**AWS Lambda** hosts code and only executes it on demand & when it needs to run.
* Server amount is handled dynamically.
* No extra fees are incurred for idleness.
* Fees are only incurred for incoming requests.
* Server software is handled.

**NodeJS, Java, Python & C#** can be used to create serverless APIs for **AWS Lambda**.

In the **AWS Gateway API** you can create **stages** *(versions)* for your API like **'development'** or **'production'**.  
AWS will give you an URL leading to your API.  

# Section 2 | The Core Serverless Services

1. **AWS S3** *(Simple Storage System)* (APP) is actually a file storage system.
    * This is for hosting.
2. **AWS API Gateway** (API)
    * This is for the REST API *(responses & requests)*.
3. **AWS Lambda** (LOGIC)
    * This is for code execution.
4. **AWS DynamoBD** (DATA)
    * This is for storing & retrieving data.
5. **AWS Cognito** (AUTH)
    * This is for authenticating users.
6. **AWS Route53** (DNS)
    * This is for translating URLs & configuring domains.
7. **AWS CloudFront** *(optional)* (CACHE)
    * This is for caching & improving performance.

A mobile app won't necessarily need services 1, 6, 7.

# Section 3 | API Creation with AWS Lambda & API Gateway

AWS API Gateway:
* Overview: [https://aws.amazon.com/api-gateway/](https://aws.amazon.com/api-gateway/) *(2021)*
* Pricing: [https://aws.amazon.com/api-gateway/pricing/](https://aws.amazon.com/api-gateway/pricing/) *(2021)*
* Docs: [https://aws.amazon.com/documentation/apigateway/](https://aws.amazon.com/documentation/apigateway/) *(2021)*

> AWS Services initially don't have any permissions.  
> You implicitly give services permissions by using them through the AWS console.  
> **'Roles'** can be given to services in order to interact with other services.
> 
> You can secure your project on AWS using **IAM** *(Identity & Access Management)*.  
> You can do this by creating an IAM group.  
> For instance, users in an 'admin' group can have the **'AdministratorAccess' Policy** assigned to them,  
> but they don't have access to the account billing like the **root account**.  
> The root account should not be used for day-to-day business.  
> You can create a **'user'** on the AWS console.  
> The users can have **Programmatic Access** *(AWS API, CLI, SDK, etc)* or **AWS Management Console Access**.

**'Resources'** made in AWS API Gateway are NOT live.  
You have to 'Actions/**Deploy API'** to expose it to the web.  
> An **endpoint** consists of the resource/path & the method / the type of request *(GET, PUT, POST)*
* The **Method Requests** box ensures incoming requests have a certain shape, contain certain data *(headers)* & fulfill certain requirements.
* The **Integration Request** box maps/transforms incoming data before it reaches the API.
* The **Integration Response** box allows for setting headers & mapping templates to send back.
* The **Method Response** box ensures outgoing responses have a certain shape, contain certain data *(headers)* & fulfill certain requirements.

A **snapshot** of the API is taken & deployed to the web.  
**'Stages'** contains different versions of your API and the info of its deployment.  
**'Authorizers'** adds authentication to the API's resources/paths.  
**'Models'** *(optional; JSON schema)* define the shape of the data that the API interacts with;  
it can be used to validate incoming data.  
**'Documentation'** allows for documenting APIs.  
**'Binary Support'** adds support for sending files along with API requests;  
you have to register the file types here.  

## Creating a Resource

A **'proxy resource'** catches all requests.  
**CORS**: Cross Origin Resource Sharing.  
> A security model that prevents a server from accessing resources from another server.  
> This is necessary for the client to speak to the API; it checks the headers.  
> CORS will create an 'OPTIONS' method & automatically configure the right headers
> to send back to the client. You can see these headers in 'Integration Response' under
> the resource's method response 'Header Mappings'.

When creating a new Lambda function, the **handler** *(index.handler)* looks for the filename `index.` and the function name `.handler`.  
This handler `index.fn` looks for a file called `index` and a function within it called `fn`.  
You can define permissions for the function with **'Roles'**.

You need to set CORS headers on all the methods involved.

**'Lambda Proxy Integration'** in 'Integration Request' ensures that all the request data is sent and not just the request body. You can pass the complete request to Lambda.

> Be sure to **save & deploy** code changes in Lambda.

Lambda stores its logs in **'CloudWatch'**.

Maybe it's a good practice to have Lambda only work with the data it needs.