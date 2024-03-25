import { Skeleton, Grid } from "@mui/material";

const FormSkeleton = () => (
  <Grid container spacing={2}>
    <Grid item xs={12} sm={6}>
      <Skeleton variant="text" width="100%" height={60} animation="wave" />
    </Grid>
    <Grid item xs={12} sm={6}>
      <Skeleton variant="text" width="100%" height={60} animation="wave" />
    </Grid>
    <Grid item xs={12} sm={6}>
      <Skeleton variant="text" width="100%" height={60} animation="wave" />
    </Grid>
    <Grid item xs={12} sm={6}>
      <Skeleton variant="text" width="100%" height={60} animation="wave" />
    </Grid>
    <Grid item xs={12}>
      <Skeleton variant="rectangular" width="100%" height={150} animation="wave" />
    </Grid>
    <Grid item xs={12}>
      <Skeleton variant="text" width="100%" height={60} animation="wave" />
    </Grid>
    <Grid item xs={12}>
      <Skeleton variant="text" width="100%" height={60} animation="wave" />
    </Grid>
    <Grid item xs={12}>
      <Skeleton variant="text" width="100%" height={60} animation="wave" />
    </Grid>
    <Grid item xs={12}>
      <Skeleton variant="rectangular" width="100%" height={60} animation="wave" />
    </Grid>
  </Grid>
);

export default FormSkeleton;
