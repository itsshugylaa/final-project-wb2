# Final Project — Travel Booking Web Application

This project is a full-stack web application developed as a final assignment.  
It demonstrates frontend–backend integration, authentication, authorization, CRUD operations, and deployment.

---

##  Live Deployment

Frontend (GitHub Pages):  
https://itsshugylaa.github.io/final-project-wb2/

Backend (Render):  
https://travel-backend-ndpg.onrender.com

---

##  Project Objectives

- Implement user authentication and authorization
- Use JWT for secure access to protected routes
- Implement role-based access control (RBAC)
- Provide CRUD operations for bookings
- Connect frontend with a live backend API
- Deploy backend and frontend to cloud platforms
- Test API using Postman

---

##  Technologies Used

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)
- bcryptjs

### Deployment
- Frontend: GitHub Pages
- Backend: Render
- Database: MongoDB Atlas

---

##  Authentication & Authorization

### Authentication
- Users can register and log in
- JWT token is issued on successful login/registration
- Token is stored in browser localStorage
- Protected routes require a valid JWT token

### Authorization (RBAC)

Role-based access control is implemented on the backend.  
User roles are stored in MongoDB Atlas and enforced using Express middleware.

### User
- Role is stored in MongoDB Atlas
- Can register and log in
- Can view and create bookings
- Cannot delete bookings (restricted by backend middleware)

### Admin
- Role is stored in MongoDB Atlas
- Can log in
- Can view all bookings
- Can delete bookings (admin-only backend permission)

---

## CRUD Functionality

### Bookings

- **Create** — authenticated users can create new bookings via protected API endpoints
- **Read** — authenticated users can retrieve booking data from the server
- **Delete** — booking deletion is restricted to admin users and enforced by backend middleware

---

##  API Endpoints

### Authentication
- `POST /api/auth/register` — Register new user
- `POST /api/auth/login` — Login user and receive JWT

### Bookings
- `GET /api/bookings` — Get all bookings (JWT required)
- `POST /api/bookings` — Create booking (JWT required)
- `DELETE /api/bookings/:id` — Delete booking (Admin only)

---

##  API Testing

All API endpoints were tested using Postman.  
A Postman collection is included in the repository.

Tested features:
- Registration
- Login
- JWT authorization
- Admin-only delete booking
- Error handling (401, 403)

<img width="2670" height="1784" alt="image" src="https://github.com/user-attachments/assets/a7bb5dea-c4f7-4fe2-b5ec-4e2b93e645d4" />
<img width="2670" height="1784" alt="image" src="https://github.com/user-attachments/assets/1d593389-d223-4e79-9a58-bf16888bc92d" />
<img width="2670" height="1784" alt="image" src="https://github.com/user-attachments/assets/f36d9e80-e4b6-4c65-b51f-c9585d765cc2" />
<img width="2670" height="1784" alt="image" src="https://github.com/user-attachments/assets/59fbce5b-9ddf-424d-b4ef-8066503cab96" />
<img width="2670" height="1784" alt="image" src="https://github.com/user-attachments/assets/827bd6da-0a4b-4593-bd76-d9a24eccc93f" />
<img width="2670" height="1784" alt="image" src="https://github.com/user-attachments/assets/7b7c5ce7-317c-42bb-890e-f94f4f4baad8" />

---

##  Run Project Locally

### Backend
```bash
cd backend
npm install
npm start
```

##  Create .env file inside backend/:
```
MONGO_URI=mongodb+srv://assig4user:assig4pass123@tasks.lw2cq6t.mongodb.net/?appName=Tasks
JWT_SECRET=supersecretkey
```
##  Frontend
Open index.html in a browser.


##  Project Structure
```
final-project-wb2/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── js/
├── img/
├── index.html
├── style.css
├── README.md
└── postman_collection.json
```
---

## Conclusion

This project successfully demonstrates the development of a full-stack web application with real-world functionality. The application integrates a frontend interface with a backend API, providing secure user authentication and authorization using JWT.

Role-based access control is enforced on the backend using middleware, with user roles stored in MongoDB Atlas. CRUD operations for bookings are implemented through protected API endpoints, ensuring that only authorized users can perform specific actions.

The project is fully deployed, with the backend hosted on Render and the frontend hosted on GitHub Pages. All API endpoints were tested using Postman to verify correct behavior and access control.

Overall, this project meets the requirements of the final assignment and demonstrates practical skills in backend development, frontend integration, security, and deployment.
