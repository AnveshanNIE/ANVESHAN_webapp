import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResearchComponent } from './components/research/research.component';
import { EventsComponent } from './components/events/events.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { BlogComponent } from './components/blog/blog.component';
import { MembersComponent } from './components/members/members.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Home route
  { path: 'about-us', component: AboutUsComponent },  // About Us route
  { path: 'projects', component: ProjectsComponent },  // Projects route
  { path: 'research', component: ResearchComponent },  // Research route
  { path: 'events', component: EventsComponent },  // Events route
  { path: 'contact', component: ContactComponent },  // Contact Us route
  
  // Directly loaded components for Resources, Blog, Members, and Newsletter
  { path: 'resources', component: ResourcesComponent },  // Resources route
  { path: 'blog', component: BlogComponent },  // Blog route
  { path: 'members', component: MembersComponent },  // Members route
  { path: 'newsletter', component: NewsletterComponent },  // Newsletter route

  // Redirect to Home if no matching route is found
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

export { routes }; // Export the routes
