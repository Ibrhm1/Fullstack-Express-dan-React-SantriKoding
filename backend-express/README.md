# 📘 Full Stack Express React API Documentation

**By [SantriKoding](https://santrikoding.com/)**

---

## 🚀 Introduction

Selamat datang di dokumentasi API **Full Stack Express React**. Dokumentasi ini akan membantumu memahami bagaimana cara berinteraksi dengan backend menggunakan berbagai endpoint yang tersedia.

---

## 🌐 Base URL

```
http//localhost:3000
```

---

## 🔐 Authentication

Autentikasi menggunakan **JWT Token**. Token ini harus dikirimkan dalam header setiap permintaan ke Endpoint yang bersifat privat/admin:

**Header Format:**
Authorization: Bearer <token>

---

## 📝 Register

### Endpoint

`POST /api/register`

### Request Body

```json
{
  "name": "John Doe",
  "email": "JohnDoe@gmail.com",
  "password": "hashpassword"
}
```

Response:

```json
{
  "success": true,
  "message": "Register successfully",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "JohnDoe@gmail.com",
    "password": "hashpassword",
    "createdAt": "2025-07-06T13:59:31.285Z",
    "updatedAt": "2025-07-06T13:59:31.285Z"
  }
}
```

## 🔑 Login

### Endpoint

`POST /api/login`

**POST** /api/login
Request body:

```JSON
{
    "email": "JohnDoe@gmail.com",
    "password": "hashpassword",
},
```

Response:

```json
{
  "success": true,
  "message": "Login successfully",
  "data": {
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "John Doe@gmail.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

## 👤 Create User

### Endpoint

`POST /api/admin/users`
Request body:

```JSON
{
    "name": "John Doe",
    "email": "JohnDoe@gmail.com",
    "password": "hashpassword",
},
```

- header

```JSON
{
    "Authorization": "token"
}
```

Respone:

```JSON
{
    "success": true,
    "message": "Create user successfully",
    "data": {
        "id": 13,
        "name": "John Doe",
        "email": "JohnDoe@gmail.com",
        "password": "hashpassword",
        "createdAt": "2025-07-06T14:10:26.698Z",
        "updatedAt": "2025-07-06T14:10:26.698Z"
    }
}
```

## 📄 Get All Users

### Endpoint

`GET /api/admin/users`
Response:

```json
{
  "success": true,
  "message": "Get users successfully",
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "JohnDoe@gmail.com",
      "password": "hashpassword",
      "createdAt": "2025-07-04T08:17:42.307Z",
      "updatedAt": "2025-07-04T08:17:42.307Z"
    }
  ]
}
```

Error:

```json
{
  "message": "Token not found"
}
```

```json
{
  "message": "Invalid token"
}
```

## 🔍 Get User By Id

### Endpoint

`GET /api/admin/users/:id`
Response:

```json
{
  "success": true,
  "message": "Get user by id {id} successfully",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "JohnDoe@gmail.com",
    "password": "hashpassword",
    "createdAt": "2025-07-04T08:17:42.307Z",
    "updatedAt": "2025-07-04T08:17:42.307Z"
  }
}
```

Error:

```json
{
  "success": false,
  "message": "User not found"
}
```

## ✏️ Update User

### Endpoint

`PUT /api/admin/users/:id`
Request body:

```json
{
  "name": "new name", //optional
  "email": "new email", // optional
  "password": "new hashpassword" //optional
}
```

Response:

```json
{
  "success": true,
  "message": "Update user by id {id} successfully",
  "data": {
    "id": 1,
    "name": "new name",
    "email": "new email",
    "password": "new hashpassword",
    "createdAt": "2025-07-04T08:17:42.307Z",
    "updatedAt": "2025-07-06T14:27:27.940Z"
  }
}
```

Error:

```json
{
  "message": "Token not found"
}
```

## 🗑️ Delete User

### Endpoint

`DELETE /api/admin/users/:id`

Response:

```json
{
  "success": true,
  "message": "Delete user by id 13 successfully"
}
```

Error:

```json
{
  "message": "Token not found"
}
```
