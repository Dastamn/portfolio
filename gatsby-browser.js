const React = require('react');
const Layout = require('./src/components/Layout').default;
require('./src/styles/main.scss');

exports.wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
