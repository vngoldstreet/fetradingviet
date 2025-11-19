import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UploadComponent } from './shared/upload/upload.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { ContentsComponent } from './pages/contents/contents.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: 'dang-nhap',
    component: LoginComponent,
  },
  {
    path: 'dang-ky',
    component: SignupComponent,
  },
  {
    path: 'tin-tuc',
    component: ContentsComponent,
  },
  {
    path: 've-chung-toi',
    component: AboutUsComponent,
  },
  {
    path: 'lien-he',
    component: ContactComponent,
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: HomepageComponent,
  },
  {
    path: ':url',
    component: PostDetailComponent,
  },
];
