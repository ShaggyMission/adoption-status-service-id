# 🔍 Adoption Status Query Service - Shaggy Mission

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose" />
  <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" alt="Swagger" />
</div>

<div align="center">
  <h3>🔍 Pet Adoption Status Query Microservice</h3>
  <p><em>Part of the Shaggy Mission ecosystem - Real-time adoption status checking for informed decisions! 🐕🐱</em></p>
</div>

---

## 🌟 Overview

The **Adoption Status Query Service** is a vital microservice in the Shaggy Mission platform that provides real-time adoption status information for individual pets. This service enables users, rescue organizations, and other system components to quickly check the current adoption status of any pet using their unique identifier.

## 🎯 What This Service Does

- **Real-time Status Queries**: Get current adoption status for any pet by ID
- **Instant Availability Check**: Verify if pets are available, reserved, or adopted
- **Status Information Retrieval**: Access complete status records with notes and timestamps
- **Integration Support**: Provide status data for other microservices and applications
- **User Experience Enhancement**: Enable real-time status updates in web and mobile apps
- **Administrative Oversight**: Support management queries and status verification
- **Decision Support**: Provide accurate status information for adoption workflows

## 🛠️ Tech Stack

- **Runtime**: Node.js with Express.js framework
- **Database**: MongoDB with Mongoose ODM
- **Query Optimization**: Efficient single-document retrieval by unique petId
- **RESTful Design**: Clean GET endpoint with path parameters
- **Documentation**: Swagger UI for interactive API documentation
- **Error Handling**: Comprehensive validation and error management
- **Performance**: Optimized queries for real-time applications

## 📡 API Endpoints

### Adoption Status Query
**`GET /adoption/status/:petId`**
- Retrieves the current adoption status for a specific pet
- Returns complete status record with notes and timestamps
- Provides real-time status information for decision-making
- Supports integration with other services and applications

**Path Parameters:**
- `petId` (required): Unique pet identifier (MongoDB ObjectId format)

**Request Examples:**
```bash
GET /adoption/status/64f8b2a1c3d4e5f6a7b8c9d0
GET /adoption/status/64f8b2a1c3d4e5f6a7b8c9d1
```

**Successful Response (200):**
```json
{
  "_id": "64f8b2a1c3d4e5f6a7b8c9d4",
  "petId": "64f8b2a1c3d4e5f6a7b8c9d0",
  "status": "not_adopted",
  "notes": "Healthy golden retriever ready for adoption",
  "updatedAt": "2024-01-15T10:30:00.000Z",
  "__v": 0
}
```

**Error Responses:**
- `404 Not Found`: No status record exists for the pet
  ```json
  {
    "message": "Status not found for this pet."
  }
  ```
- `500 Internal Server Error`: Database or server issues
  ```json
  {
    "message": "Failed to fetch status",
    "error": "Database connection failed"
  }
  ```

### API Documentation
**`GET /statusId-docs`**
- Interactive Swagger UI documentation
- Complete API specification with examples
- Request/response schemas and validation rules
- Try-it-out functionality for testing status queries

## 🔧 Core Functionality

### Status Query System
The service provides real-time access to adoption status information:

- **Fast Retrieval**: Efficient MongoDB queries by unique petId
- **Complete Records**: Full status information including notes and timestamps
- **Real-time Data**: Always returns the most current status information
- **Error Handling**: Proper responses for missing or invalid pet IDs

### Status Types Returned
- **`not_adopted`**: Pet is available for adoption
- **`reserved`**: Pet is reserved by a potential adopter
- **`adopted`**: Pet has been successfully adopted

### Integration Features
- **RESTful Design**: Standard HTTP GET method with path parameters
- **JSON Response**: Structured data perfect for API integration
- **Error Consistency**: Standardized error responses across the platform
- **Performance Optimized**: Fast queries suitable for real-time applications

## 🌐 Service Integration

This microservice integrates seamlessly with other Shaggy Mission platform components:

- **Pet List Service**: Filter and display pets based on adoption status
- **Mobile Applications**: Real-time status verification for user interfaces
- **Administrative Dashboard**: Status monitoring and reporting capabilities
- **Notification System**: Trigger alerts based on status information
- **Adoption Workflow**: Support decision-making throughout adoption process
- **External APIs**: Provide status data to partner organizations

## 🔒 Data Security & Performance

- **Efficient Queries**: Optimized MongoDB findOne queries by unique petId
- **Fast Response**: Minimal data transfer with focused response structure
- **Error Handling**: Comprehensive validation and error management
- **Input Validation**: Proper handling of invalid or missing pet IDs
- **Database Optimization**: Indexed queries for maximum performance
- **Connection Management**: Efficient database connection handling

## 🗃️ Database Schema

### AdoptionStatus Document Structure
```javascript
{
  _id: ObjectId,                    // MongoDB unique identifier
  petId: String (required, unique), // Pet's unique identifier
  status: String (enum: [           // Current adoption status
    'not_adopted',                  // Available for adoption
    'reserved',                     // Reserved by adopter
    'adopted'                       // Successfully adopted
  ], default: 'not_adopted'),
  notes: String (optional),         // Additional context/notes
  updatedAt: Date (auto-generated) // Last update timestamp
}
```

### Query Pattern
```javascript
// Find status by petId
AdoptionStatus.findOne({ petId: req.params.petId })
```

## 📚 API Documentation

Complete API documentation is available through Swagger UI at `/statusId-docs` when the service is running. The documentation includes:

- **Interactive endpoint testing** with real pet ID examples
- **Comprehensive request/response schemas** with validation rules
- **Status type documentation** with detailed explanations
- **Error handling scenarios** and proper HTTP status codes
- **Integration examples** and common use cases
- **Performance considerations** and best practices

## 🔧 Development

### Project Structure
```
├── config/
│   └── db.js                         # MongoDB connection setup
├── controllers/
│   └── status.controller.js          # Status query logic
├── models/
│   └── status.model.js               # Mongoose AdoptionStatus schema
├── routes/
│   └── status.routes.js              # API route definitions
├── docs/
│   └── swagger.yaml                  # OpenAPI specification
├── app.js                            # Express application setup
└── server.js                         # Server startup and configuration
```

### Environment Setup
```bash
# Install dependencies
npm install

# Start development server
npm start

# Server runs on port 3013
```

### Testing the API
```bash
# Query pet adoption status
curl -X GET http://localhost:3013/adoption/status/64f8b2a1c3d4e5f6a7b8c9d0

# Expected response: 200 OK with status object
# Or: 404 Not Found if pet status doesn't exist
```

## 🔄 Query Workflows

### User Status Check Process
1. **Pet Discovery**: User finds interesting pet in listing
2. **Status Verification**: Query current adoption status
3. **Decision Making**: User decides based on availability
4. **Action Taking**: User proceeds with interest or continues browsing

### Application Integration
1. **List Service**: Check status before displaying pets
2. **Mobile App**: Real-time status updates during browsing
3. **Admin Panel**: Monitor status for management purposes
4. **Notification**: Trigger alerts based on status changes

### Administrative Use Cases
- **Status Monitoring**: Track adoption progress across all pets
- **Data Verification**: Confirm status accuracy for reporting
- **Workflow Support**: Enable status-based decision making
- **Integration Testing**: Verify status data consistency

## ⚡ Performance Considerations

### Query Optimization
- **Indexed Queries**: petId field optimized for fast lookups
- **Single Document**: Efficient findOne operation
- **Minimal Data**: Focused response with only necessary information
- **Connection Pooling**: Efficient MongoDB connection management

### Real-time Performance
- **Fast Response**: Optimized for real-time applications
- **Low Latency**: Efficient database queries and response handling
- **Memory Efficient**: Minimal memory footprint per request
- **Scalable Design**: Architecture supports high query volumes

## 🚀 Future Enhancements

- **Caching Layer**: Redis caching for frequently queried pets
- **Batch Queries**: Support multiple pet status queries in single request
- **Status History**: Track status change history and timeline
- **Real-time Updates**: WebSocket support for live status updates
- **Query Analytics**: Track popular pets and query patterns
- **Advanced Filtering**: Support status queries with additional criteria
- **Integration Webhooks**: Notify external systems of status changes
- **Performance Monitoring**: Detailed query performance metrics

## 📊 Common Use Cases

### Pet Browsing Experience
- **Availability Check**: Verify pet is still available before showing details
- **Real-time Updates**: Update UI based on current status
- **Decision Support**: Provide accurate information for adoption decisions
- **Mobile Optimization**: Fast status checks for mobile applications

### Administrative Operations
- **Status Verification**: Confirm pet status for management decisions
- **Workflow Monitoring**: Track pets through adoption process
- **Data Integrity**: Verify status consistency across systems
- **Reporting**: Generate status-based reports and analytics

### Service Integration
- **API Composition**: Combine with other services for complete pet information
- **Data Synchronization**: Ensure status consistency across platforms
- **External Integration**: Provide status data to partner organizations
- **Microservice Communication**: Support inter-service communication

## 🎯 Integration Examples

### Pet List Service Integration
```javascript
// Check status before displaying pet
const statusResponse = await fetch(`/adoption/status/${petId}`);
const statusData = await statusResponse.json();

if (statusData.status === 'not_adopted') {
  // Show pet as available
  displayPet(pet);
}
```

### Mobile App Integration
```javascript
// Real-time status check
const checkPetStatus = async (petId) => {
  try {
    const response = await fetch(`/adoption/status/${petId}`);
    const status = await response.json();
    updateUIStatus(status);
  } catch (error) {
    handleStatusError(error);
  }
};
```

---

<div align="center">
  <p><strong>Built with ❤️ for street dogs and cats everywhere 🐕🐱</strong></p>
  <p><em>Helping every pet find their perfect forever home!</em></p>
  <p>📖 <a href="/statusId-docs">View API Documentation</a></p>
</div>