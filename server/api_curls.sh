#!/bin/bash

# Base URL
BASE_URL="http://localhost:3000/api"

# Signup
curl -X POST \
  "${BASE_URL}/auth/signup" \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "password": "password123", "username": "exampleuser"}'

# Login
curl -X POST \
  "${BASE_URL}/auth/login" \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "password": "password123"}'

# List all companies
curl -X GET \
  "${BASE_URL}/companies" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# Get company with colleges
curl -X GET \
  "${BASE_URL}/companies/COMPANY_ID" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# Create Question (Upload PDF)
curl -X POST \
  "${BASE_URL}/questions" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -F "companyName=Google" \
  -F "collegeName=DTU" \
  -F "visitDate=2024-07-05T00:00:00.000Z" \
  -F "metaData={\"topics\":[\"algorithms\",\"data structures\"],\"difficulty\":\"hard\"}" \
  -F "pdf=@/path/to/your/file.pdf"

# Update Question
curl -X PUT \
  "${BASE_URL}/questions/QUESTION_ID" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -F "companyName=Microsoft" \
  -F "collegeName=NSUT" \
  -F "visitDate=2024-08-01T00:00:00.000Z" \
  -F "metaData={\"topics\":[\"system design\"],\"difficulty\":\"medium\"}" \
  -F "pdf=@/path/to/your/updated_file.pdf"

# Delete Question
curl -X DELETE \
  "${BASE_URL}/questions/QUESTION_ID" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# Search Questions
curl -X GET \
  "${BASE_URL}/questions/search?q=Google" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"