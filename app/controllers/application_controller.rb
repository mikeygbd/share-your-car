class ApplicationController < ActionController::API
    def current_user
      #mock logged_in
      User.first
    end

    def logged_in?
      !!current_user
    
  end
end
