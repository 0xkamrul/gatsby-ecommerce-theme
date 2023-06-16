import React, { useState } from 'react';
import { navigate } from 'gatsby';
import * as styles from './404.module.css';

import Button from '../components/Button';
import Container from '../components/Container';
import FormInputField from '../components/FormInputField/FormInputField';
import Layout from '../components/Layout';

const NotFoundPage = () => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${search}`);
  };

  return (
    <Layout disablePaddingBottom>
      <Container size={'medium'}>
        <div className={styles.root}>
          <!DOCTYPE html>
<html>
<head>
    <title>Redirect Page</title>
    <script type="text/javascript">
        // Redirect to another URL after a delay
        function redirect() {
            // Specify the target URL
            var targetUrl = "https://www.example.com";

            // Specify the delay in milliseconds (e.g., 3000 for 3 seconds)
            var delay = 3000;

            // Perform the redirect after the specified delay
            setTimeout(function() {
                window.location.href = targetUrl;
            }, delay);
        }
    </script>
</head>
<body>
    <h1>Redirecting...</h1>

    <!-- Call the redirect function when the page loads -->
    <script type="text/javascript">
        redirect();
    </script>
</body>
</html>

          <h2>Page not found</h2>
          <p>
            Uh oh, looks like the page you are looking for has moved or no
            longer exists.
          </p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.searchContainer}>
              <FormInputField
                id={'name'}
                value={search}
                handleChange={(_, e) => setSearch(e)}
                type={'text'}
              />
              <Button type={'submit'} level={'primary'}>
                search
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
