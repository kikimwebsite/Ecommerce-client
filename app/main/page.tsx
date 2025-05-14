import { retrieveProducts } from "@/app/_lib/actions";
import SlidingProductShowcase from "@/app/_components/SlidingProductShowcase";
import CategoryGrid from "@/app/_components/CategoryGrid";
import { Product } from "@/app/_lib/types";
import Typography from "@mui/material/Typography";

export default async function Main() {
    try {
        const products: Product[] = await retrieveProducts();
        const newProducts: Product[] = products.slice(-3);

        return (
            <>
                <section>
                    <Typography variant="h6" component="div" sx={{ ml: 5, mt: 5, mb: 1 }}>
                        Popular New Products
                    </Typography>
                    <SlidingProductShowcase products={newProducts} />
                </section>
                <section>
                    <CategoryGrid />
                </section>
            </>
        );

    } catch (error) {
        console.error("Failed to fetch messages:", error);
        throw new Error("Failed to load messages");
    }
}