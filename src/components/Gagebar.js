import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    width: '60%',
  },
});

export default function Gagebar({gageBar}) {
  const classes = useStyles();
  //const percentage = //Number(gageBar.gageBar);
  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((oldProgress) => {
  //       if (oldProgress === 100) {
  //         return 0;
  //       }
  //       //const diff = Math.random() * 10;
  //       return gageBar;//Math.min(oldProgress + diff, 100);
  //     });
  //   }, 500);

  //    return () => {
  //      clearInterval(timer);
  //    };
  // }, [gageBar]
  // );

  return (
    <div className={classes.root}>
      <LinearProgress variant="determinate" value={gageBar} />
    </div>
  );
}
