class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :email, :firstname, :lastname, :hometown
end
