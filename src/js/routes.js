
import HomePage from '../pages/home.vue';
// import AboutPage from '../pages/about.vue';
import FormPage from '../pages/form.vue';
import CatalogPage from '../pages/catalog.vue';
import ProductPage from '../pages/product.vue';
import SettingsPage from '../pages/settings.vue';
import LoginPage from '@/pages/Auth/login.vue';
import DynamicRoutePage from '../pages/dynamic-route.vue';
import RequestAndLoad from '../pages/request-and-load.vue';
import NotFoundPage from '../pages/404.vue';
import LandingPage from '../pages/landing.vue';
import RegisterPage from '@/pages/Auth/signup.vue';



const requireAuth = (to, from, next) => {
  if (localStorage.token !== null) {
    // Token is not null, allow access to the route
    next();
  } else {
    // Token is null, redirect to the login page or any other route
    next('/login/');
  }
};

const preventLoginAccess = ({ resolve, reject }) => {
  if (localStorage.getItem('token') !== null) {
    // User is authenticated, redirect to a different route
    reject() // Replace with the route you want to redirect to
  } else {
    // User is not authenticated, allow access to the login page
    resolve()
  }
}



var routes = [
  {
    path: '/',
    component: LandingPage,
  },
  {
    path: '/about/',
    component: () => import('@/pages/about.vue'),
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/login/',
    component:  LoginPage,
    beforeEnter: preventLoginAccess
  },
  {
    path: '/register/',
    component : RegisterPage,
  },
  {
    path: '/catalog/',
    component: CatalogPage,
  },
  {
    path: '/product/:id/',
    component: ProductPage,
  },
  {
    path: '/settings/',
    component: SettingsPage,
  },

  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];


export default routes;
