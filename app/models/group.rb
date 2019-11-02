class Group < ApplicationRecord
  has_many :messages
  has_many :group_user,foreign_key:'user_id'
  has_many :user, through: :group_user
  validates :name, presence: true, uniqueness:true

  def show_last_message
    if (last_message = messages.last).present?
      last_message.content? ? last_message.content : '画像が投稿されています'
    else
      'まだメッセージはありません。'
    end
  end
  
end
