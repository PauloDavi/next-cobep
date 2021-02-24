import Image from 'next/image';
import { Card, Grid, Typography } from '@material-ui/core';

const Models = () => {
  return (
    <div className="mt-24">
      <h1 className="text-gray-600 text-6xl sm:text-8xl text-center">
        Modelos
      </h1>
      <div className="mt-5 mb-5 w-full px-8 py-5 text-white font-bold text-md leading-none">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <div className="flex justify-center">
              <Card
                elevation={5}
                className="text-center px-5 pb-8 pt-5 h-full max-w-sm"
              >
                <div className="text-xl text-center mb-5">
                  <Typography variant="h5" color="secondary">
                    CALL FOR PAPERS
                  </Typography>
                  <div className="mt-4">
                    <Image
                      src="https://www.ieee-ecce.org/2021/wp-content/uploads/sites/7/2020/09/Call-for-Papers-e1600095050722.png"
                      alt="CALL FOR PAPERS"
                      width={120}
                      height={159}
                    />
                  </div>
                </div>
                <p>
                  Um texto grande explicando alguma coisa... e bla bla bla bla
                  bla blbalba
                </p>
                <p className="mt-5">
                  Um texto grande explicando alguma coisa...
                </p>
              </Card>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="flex justify-center">
              <Card
                elevation={5}
                className="text-center px-5 pb-8 pt-5 h-full max-w-sm"
              >
                <div className="text-xl text-center mb-5">
                  <Typography variant="h5" color="secondary">
                    CALL FOR TUTORIALS
                  </Typography>
                  <div className="mt-4">
                    <Image
                      src="https://www.ieee-ecce.org/2021/wp-content/uploads/sites/7/2020/09/Call-for-Papers-e1600095050722.png"
                      alt="CALL FOR TUTORIALS"
                      width={120}
                      height={159}
                    />
                  </div>
                </div>
                <p>
                  Um texto grande explicando alguma coisa... e bla bla bla bla
                  bla blbalba
                </p>
                <p className="mt-5">
                  Um texto grande explicando alguma coisa...
                </p>
              </Card>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Models;
