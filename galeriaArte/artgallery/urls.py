from django.urls import path
from . import views

urlpatterns = [
    path('', views.listar_productos, name='listar_productos'),
    path('crear/', views.crear_producto, name='crear_producto'),
    path('actualizar/<int:pk>/', views.actualizar_producto, name='actualizar_producto'),
    path('eliminar/<int:pk>/', views.eliminar_producto, name='eliminar_producto'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
]
