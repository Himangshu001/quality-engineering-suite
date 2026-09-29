
def test_health_check(client):
    response = client.get("/health")

    assert response.status_code == 200

    assert response.json() == {
        "status": "healthy",
        "message": "Quality Engineering API is running"
    }

def test_login_success(client):
    response = client.post(
        "/login",
        json={
            "email": "tester@example.com",
            "password": "Test123!"
        }
    )

    assert response.status_code == 200

    assert response.json() == {
        "success": True,
        "message": "Login successful!"
    }


def test_login_invalid_credentials(client):
    response = client.post(
        "/login",
        json={
            "email": "wrong@example.com",
            "password": "Wrong123!"
        }
    )

    assert response.status_code == 200

    assert response.json() == {
        "success": False,
        "message": "Invalid email or password"
    }


def test_login_missing_password(client):
    response = client.post(
        "/login",
        json={
            "email": "tester@example.com"
        }
    )

    assert response.status_code == 422


def test_login_empty_credentials(client):
    response = client.post(
        "/login",
        json={
            "email": "",
            "password": ""
        }
    )

    assert response.status_code == 200

    assert response.json() == {
        "success": False,
        "message": "Invalid email or password"
    }