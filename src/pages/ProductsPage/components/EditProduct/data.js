import { useEffect, useState } from "react";
import { Products } from "../../../../apis/apis";
import { useLocation, useNavigate } from "react-router-dom";

const useDataSetter = () => {
    const [paginator, setPaginator] = useState(1);
    const fetchProducts = new Products();
    const navigate = useNavigate();
    const location = useLocation().search;
    const [product, setProduct] = useState({});
    const ProductId = parseInt(location.slice(1));


    useEffect(() => {

        fetchProducts.getSingleProduct(ProductId, setProduct)

    }, []);


    useEffect(() => {

        if (!ProductId) {

            navigate('/');

        }

    }, []);

    return { paginator, setPaginator, product, setProduct, fetchProducts, ProductId }
}

const convartProductFormat = (product) => {

    return {
        codaa_service_id: product?.codaa_service_id || 1,
        name: product?.name || product?.attributes?.name,
        price: product?.price || product?.attributes?.price,
        old_price: product?.old_price || product?.attributes?.old_price,
        image: product?.image || product?.attributes?.image,
        description: product?.description || product?.attributes?.description,
        demo: product?.demo || product?.attributes?.demo,
        features: product?.features || product?.attributes?.features,
    }

}

export {
    useDataSetter,
    convartProductFormat
}