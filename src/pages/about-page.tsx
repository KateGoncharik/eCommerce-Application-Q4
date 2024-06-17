import { FC } from 'react';

import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
  useScrollTrigger,
} from '@mui/material';

import '@/assets/photo/beliar13.webp';
import '@/assets/photo/kate.webp';
import '@/assets/photo/mideli.webp';

import { cardStyle, gitLinkStyle, teamMembers } from './about-page.constants';
import { Member } from './about-page.types';

export const AboutPage: FC = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Typography gutterBottom variant="h2">
          About Us
        </Typography>
        <Grid container maxWidth="xl" spacing={4}>
          {teamMembers.map((member: Member, index: number) => (
            <Grid data-testid="member-card" item key={index} lg={4} md={6} sm={12} xl={4} xs={12}>
              <Card sx={{ backgroundColor: 'primary.light', color: 'primary.contrastText' }}>
                <Box sx={{ p: 1.5 }}>
                  <CardMedia alt={member.name} component="img" image={member.photo} sx={cardStyle} width="230" />
                </Box>
                <CardContent>
                  <Box alignItems="center" display="flex" mb={2}>
                    <Avatar alt={member.name} src={member.photo} />
                    <Box ml={2}>
                      <Typography variant="h6">{member.name}</Typography>
                      <Typography sx={{ color: 'secondary.main' }} variant="body2">
                        {member.role}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body1">{member.bio}</Typography>
                  <Typography mb={2} mt={2} variant="body1">
                    <strong>Project collaboration:</strong> {member.collaboration}
                  </Typography>
                  <Typography mb={2} mt={2} variant="body1">
                    <strong>Project contributions:</strong> {member.contributions}
                  </Typography>
                  <Link className={gitLinkStyle} data-testid={member.github} href={member.github} variant="body1">
                    <img alt={member.github} src="src/assets/icon/github-mark-white.svg" width={28} />
                    {member.nickname}
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box
        component="footer"
        data-testid="footer"
        sx={{ backgroundColor: useScrollTrigger() ? 'green' : 'grey', mt: 2 }}
      >
        <Container className="flex items-center justify-center" maxWidth="lg">
          <Link href="https://rs.school/" rel="noopener noreferrer" sx={{ pt: 1 }} target="_blank" variant="body1">
            <img alt="rs-school" src="src/assets/icon/rs-logo.png" width={60} />
          </Link>
        </Container>
      </Box>
    </>
  );
};
