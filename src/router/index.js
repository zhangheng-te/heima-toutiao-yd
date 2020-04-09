import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import('@/views/login')
const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/home')
const Question = () => import('@/views/question')
const Video = () => import('@/views/video')
const User = () => import('@/views/user')

Vue.use(VueRouter)

const routes = [
  {
    // 登录
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    component: Layout,
    children: [
    // 默认主页
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/question',
        name: 'Question',
        component: Question
      },
      {
        path: '/video',
        name: 'Video',
        component: Video
      },
      {
        path: '/user',
        name: 'User',
        component: User
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
