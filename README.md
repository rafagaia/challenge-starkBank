# Stark Bank Back End Developer Trials

Developer challenge for an opportunity to join Stark Bank</br>
</br>
Start date: Friday, March 3rd, 2023</br>
Due date: Thursday, March 9th, 2023</br>
</br>
Author: Rafael Gaia</br>
</br>

# Challenge Requirements
</br>
0. Create a Project within Stark Bank Sandbox Workspace as an Admin.</br>
0.1. Create Webhook Endpoint (WHE1) for that account.</br>
</br>
1. Develop simple app integration that does following:</br>
</br>
2. Issues 8 to 12 Invoices every 3 hours to random people for 24 hours.</br>
2.1 Receives the WHE1 callback of the Invoice credit.</br>
2.1.1. Sends the received amount (minus eventual fees) to the following account using a Transfer:</br>
    a. bank code: 20018183</br>
    b. branch: 0001</br>
    c. account: 6341320293482496</br>
    d. name: Stark Bank S.A.</br>
    e. tax ID: 20.018.183/0001-80</br>
    f. account type: payment</br>
</br>
3. Using Stark Bank SDKs and public libraries is allowed and recommended.</br>
3.1. Using whatever tools available at disposal is allowed.</br>
</br>
4. Bonus: Deploy application in the cloud (such as AWS, GCP, or Azure).</br>
4.1. Bonus: find issues on Stark Bank public code or API.</br>
4.2. Have fun and good luck!</br>
</br>

# Specifications

Stack of choice to solve challenge:</br>
- Application: Nodejs, Express</br>
- Tests: jest, supertest</br>
- Cloud: AWS EC2 (free tier) + PM2</br>

# Setup

To test the app, follow steps:</br>

...