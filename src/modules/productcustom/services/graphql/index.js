import { useQuery } from '@apollo/client';
import * as Schema from '@core_modules/productcustom/services/graphql/schema'

export const getProductCustom = () => useQuery(Schema.getProductCustom);

export default { getProductCustom };