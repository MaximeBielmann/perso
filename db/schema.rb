# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_02_202201) do

  create_table "articles", force: :cascade do |t|
    t.integer "category_id"
    t.integer "user_id"
    t.datetime "article_date"
    t.string "article_title"
    t.text "article_content"
    t.string "article_image_link"
  end

  create_table "categories", force: :cascade do |t|
    t.string "category_title"
  end

  create_table "portfolios", force: :cascade do |t|
    t.string "portfolio_cat"
    t.text "portfolio_image_link"
    t.string "portfolio_image_alt"
    t.string "portfolio_title"
    t.string "portfolio_desc"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "password"
  end

end
