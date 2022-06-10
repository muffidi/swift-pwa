import React from "react";
import { withTranslation } from '@i18n';
import { withApollo } from "@lib_apollo";
import Core from '@core_modules/productcustom/pages/default/core'

const DefaultPage = (props) => {
    return (
        <Core {...props} />
    );
};

DefaultPage.getInitialProps = async () => ({
    namespaceRequired: [],
});

export default withApollo({ssr: true})(withTranslation()(DefaultPage));