# frozen_string_literal: true

FactoryBot.define do
  factory :comment do
    user
    task_params
    content { Faker::Lorem.paragraph }
  end
end
