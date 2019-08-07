## group_users テーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messeges テーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|user_id|references|null:false,foreign_key:true|
|group_id|references|null:false,foreign_key:ture|

### Association
- belongs_to :group
- belongs_to :user

## users テーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true,index: true|
|email|string|null: false, unique: true|

### Association
- has_many :messages
- has_many :group_users
- has_many :groups,through::group_users

## groups テーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true,index|

### Association
- has_many :messages
- has_many :group_users
- has_many:users, through: :group_users