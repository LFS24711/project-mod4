class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :title
      t.integer :rating
      t.text :text_content
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :topic, null: false, foreign_key: true

      t.timestamps
    end
  end
end
