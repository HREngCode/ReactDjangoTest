from rest_framework import serializers
from .models import Comment




class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'video_id', 'text', 'user', 'user_id']
        depth = 1

        user_id = serializers.IntegerField(write_only=True)