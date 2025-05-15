import { retrieveHotProducts } from "@/app/_lib/actions";
import SlidingProductShowcase from "@/app/_components/SlidingProductShowcase";
import CategoryGrid from "@/app/_components/CategoryGrid";
import { Product } from "@/app/_lib/types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const revalidate = 86400;

export default async function Main() {
    const hotProducts: Product[] = await retrieveHotProducts();

    return (
        <>
            <Box component="section">
                <Typography variant="h6" component="div" sx={{ ml: 5, mt: 3 }}>
                    New Popular Products!
                </Typography>
                <SlidingProductShowcase products={hotProducts} isLoading={hotProducts.length === 0} />
            </Box>
            <Box component="section">
                <Typography variant="h4" component="div" sx={{ mt: 5, justifyContent: "center", display: "flex" }}>
                    Product Categories
                </Typography>
                <CategoryGrid />
            </Box>
        </>
    );
}

/*
    return (
        <>
            <section>
                <Typography variant="h6" component="div" sx={{ ml: 5, mt: 3, mb: 3 }}>
                    Popular New Products
                </Typography>
                {hotProducts.length > 0 ? (
                    <SlidingProductShowcase products={hotProducts} isLoading={hotProducts.length === 0} />
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
    );*/