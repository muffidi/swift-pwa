import React from "react";
import Layout from '@layout';
import { getProductCustom } from '@core_modules/productcustom/services/graphql';
import ButtonCustom from "@core_modules/common/ButtonCustom/index";
import useStyles from "@core_modules/productcustom/pages/default/component/style"

const CoreDefault = (props) =>  {
    const styles = useStyles();
    const{data, loading} = getProductCustom();

    const config = {
        title: 'Custom Product Page',
        header: 'relative',
        headerTitle: 'Custom Product Page',
        bottomNav: false,
    };

    if (loading) return (<>loading..</>);

    console.log({data});

    return (
        <Layout pageConfig={config} {...props}>
            <div className={styles.container}>
            {data?.products && data.products.items.map(product => (
                <div key={product.id} className={styles.productContainer}>
                <p className={styles.title}>{product.name}</p>
                <img src={product.small_image.url} alt={product.name} width={300} height={300}/>
                <p>Price:</p>
                <p>{product.price_range.minimum_price.final_price.currency} {product.price_range.minimum_price.final_price.value},-</p>
                <ButtonCustom>
                {/* <Link href={`/categories/product/${product.sku}`} key={product.id} > */}
                <p>Detail</p>
                {/* </Link> */}
                </ButtonCustom>
                </div>
            ))}
            </div>
        </Layout>
    );
};

export default CoreDefault;