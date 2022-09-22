from cmath import log
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment
from .serializers import CommentSerializer

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

@api_view(['GET'])
@permission_classes([AllowAny])
def comments_list(request, id):
        comments = request.query_params.get(id)
        queryset = Comment.objects.all()
        queryset = queryset.filter(video_id=id)
        serializer = CommentSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    # try:
    #     comments = Comment.objects.get()
    #     serializer = CommentSerializer(comments, many=True)
    #     return Response(serializer.data)
    # except Comment.DoesNotExist:
    #     return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_comments(request):
    comments = Comment.objects.all()
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated]) 
def user_comments(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        comments = Comment.objects.filter(user_id=request.user.id)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)