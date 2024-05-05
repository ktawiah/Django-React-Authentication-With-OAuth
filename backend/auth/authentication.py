from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.request import Request


class CustomJWTAuthentication(JWTAuthentication):
    def authenticate(self, request: Request):
        try:
            header = self.get_header(request)
            if header is None:
                raw_token = request.COOKIES.get("access")
            else:
                raw_token = self.get_raw_token(header)

            raw_token = self.get_raw_token(header)
            if raw_token is None:
                return None

            validated_token = self.get_validated_token(raw_token)

            return (self.get_user(validated_token),)
        except:
            return None