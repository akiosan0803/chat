## grup_members テーブル

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

## members テーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|email|string|null: false, unique: true|

### Association
- has_many :messages
- has_many :group_members
- has_many :group,through::group_members

## groups テーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true,index|

### Association
- has_many :messages
- has_many :group_members
- has_many:users::group_members