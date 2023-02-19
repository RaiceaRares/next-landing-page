import '@/styles/globals.css'
import { Header } from '@/components/common';
import { RegistrationForm } from '@/components/register';
import { Footer } from '@/components/common';

export default function App() {
  return (
    <><Header />
    <RegistrationForm/>
    <Footer />
    </>
  )
}
