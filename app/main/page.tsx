import { retrieveHotProducts } from "@/app/_lib/actions";
import SlidingProductShowcase from "@/app/_components/SlidingProductShowcase";
import CategoryGrid from "@/app/_components/CategoryGrid";
import { Product } from "@/app/_lib/types";
import Typography from "@mui/material/Typography";

export const revalidate = 86400;

export default async function Main() {
    const hotProducts: Product[] = await retrieveHotProducts();

    return (
        <>
            <section>
                <Typography variant="h6" component="div" sx={{ ml: 5, mt: 3, mb: 3 }}>
                    Popular New Products
                </Typography>
                {hotProducts.length > 0 ? (
                    <SlidingProductShowcase products={hotProducts} />
                ) : (
                    <Typography variant="body1" sx={{ ml: 5, mt: 2 }}>
                        No hot products available at the moment.
                    </Typography>
                )}
            </section>
            <section>
                <CategoryGrid />
            </section>
        </>
    );
}