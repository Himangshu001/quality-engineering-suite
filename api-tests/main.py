from fastapi import FastAPI

app = FastAPI(
    title="Quality Engineering API",
    description="Backend API for the Quality Engineering Automation Suite",
    version="1.0.0"
)


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "message": "Quality Engineering API is running"
    }

from pydantic import BaseModel


class LoginRequest(BaseModel):
    email: str
    password: str


@app.post("/login")
def login(request: LoginRequest):
    if request.email == "tester@example.com" and request.password == "Test123!":
        return {
            "success": True,
            "message": "Login successful!"
        }

    return {
        "success": False,
        "message": "Invalid email or password"
    }