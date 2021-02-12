import * as particlesJS from 'particlesjs';
import { myFirstParticle } from './particles.ts'

particlesJS.load('particles-js', myFirstParticle, function() {
  console.log('callback - particles.js config loaded');
});