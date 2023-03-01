class Api::V1::MessagesController < ActionController::API
  def index
    message = Message.order(Arel.sql('RANDOM()')).last
    render json: { message: }
  end
end
