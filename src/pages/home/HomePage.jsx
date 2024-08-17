// components
import Hero from "../../components/hero/Hero";
import Services from "../../components/services/Services";
import Category from "../../components/category/Category";
import Products from "../../components/products/Products";
import Blogs from "../../components/blogs/Blogs";
import Newsletter from "../../components/newsletter/Newsletter";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

function HomePage() {
    return (
        <>
            <main>
                <article>
                    <Hero />
                    <Services />
                    <Category />
                    <Products />
                    <Blogs />
                    <Newsletter />
                </article>
            </main>
            <Contact />
            <Footer />
        </>
    );
}

export default HomePage;
