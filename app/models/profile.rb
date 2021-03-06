class Profile < ApplicationRecord
    belongs_to :user
    has_one_attached :avatar_image_1
    attr_accessor :avatar

    def parse_base64(avatar)
        if avatar.present?
            content_type = 'png'
            contents = avatar.sub %r/data:((image|application)\/.{3,}),/, ''
            decoded_data = Base64.decode64(contents)
            filename = Time.zone.now.to_s + '.' + content_type
            File.open("#{Rails.root}/tmp/#{filename}", 'wb') do |f|
                f.write(decoded_data)
            end
            attach_image(filename)
        end
    end

    private
    def create_extension(avatar)
        content_type = rex_image(avatar)
        content_type[%r/\b(?!.*\/).*/]
    end

    def rex_image(avatar)
        avatar[/(image\/[a-z]{3,4})|(application\/[a-z]{3,4})/]
    end

    def attach_image(filename)
        avatar_image_1.attach(io: File.open("#{Rails.root}/tmp/#{filename}"), filename: filename, content_type: 'image/png')
        FileUtils.rm("#{Rails.root}/tmp/#{filename}")
    end
end
