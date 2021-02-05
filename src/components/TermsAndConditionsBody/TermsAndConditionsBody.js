import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

function TermsAndConditionsBody() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.partition}>
        <Typography id="applicable" variant="h3" className={classes.subHeading}>
          APPLICABLE TERMS
        </Typography>
        <Typography variant="body1">
          These Terms refer to, incorporate, and include the following
          additional terms, which also apply to your use of the Online
          Platforms:
        </Typography>
        <ul class="myUl">
          <li>
            <Typography variant="body1">
              <b>Our Privacy Policy:</b> Which sets out the terms on which we
              process any personal data we collect from you, or that you provide
              to us. By using the Online Platforms, you consent to such
              processing and you warrant that all data provided by you is
              accurate.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <b>Our AML/KYC Policy:</b> Which sets out the terms regarding
              identity verification of our Users and the procedures followed for
              early identification and reporting of prohibited/illegal
              activities which may be committed by using our services.When using
              the Online Platforms, you must comply with this AML Policy.
            </Typography>
          </li>
        </ul>
      </Box>
      <Box className={classes.partition}>
        <Typography variant="h3" className={classes.subHeading}>
          ABOUT
        </Typography>
        <Typography variant="body1">
          Founded in 2016, PocketBits was one of the first professional
          crypto-platforms in India. At PocketBits, we provide a digital asset
          trading platform built on ultra-modern services for digital currency
          traders and global liquidity providers. It was primarily set up as a
          simplified gateway to access the then complicated world of
          Cryptocurrencies. Our strategy at PocketBits focuses on providing
          unprecedented support and innovative trading tools for all our
          esteemed users.
        </Typography>
      </Box>
      <Box className={classes.partition}>
        <Typography variant="h3" className={classes.subHeading}>
          DEFINITIONS
        </Typography>
        <Typography variant="body1">
          <b>“Coin Wallet”</b> means an online address accessible through the
          Online Platforms and operated by a User for storage of its Digital
          Assets.
        </Typography>
        <Typography variant="body1">
          <b>“Content”</b>means any information, text, graphics, or other
          materials uploaded by PocketBits or the users, which appears on the
          Online Platforms for other users to access.
        </Typography>
        <Typography variant="body1">
          <b>“Digital Assets”</b> refers to blockchain based crypto-currencies
          such as Bitcoins, Litecoin, Ethereum, Ripple, etc., as well as
          proprietary coins and tokens .
        </Typography>
        <Typography variant="body1">
          <b>“INR”</b> means Indian Rupees.
        </Typography>
        <Typography variant="body1">
          <b>“INR Wallet”</b> means an online address accessible through the
          Online Platforms and operated by a User for the storage of the User’s
          INR holdings.
        </Typography>
        <Typography variant="body1">
          <b>“Linked Bank Account”</b> refers to any bank account owned and
          operated by the User and held with a Scheduled Commercial Bank, whose
          details were provided by the User during the activation process.
        </Typography>
      </Box>
      <Box className={classes.partition}>
        <Typography variant="h3" className={classes.subHeading}>
          FINANCIAL ADVICE
        </Typography>
        <Typography variant="body1">
          For the avoidance of doubt, we do not provide any investment advice in
          connection with the Services contemplated by these Terms of Use. We
          may provide information on the price, range, volatility of Digital
          Assets and events that have affected the price of Digital Assets but
          this is not considered investment advice and should not be construed
          as such. Any decision to purchase or sell Digital Assets is Your
          decision and PocketBits will not be liable for any loss suffered.
        </Typography>
      </Box>
      <Box className={classes.partition}>
        <Typography variant="h3" className={classes.subHeading}>
          SERVICES
        </Typography>
        <Typography variant="body1">
          The Services operated by Company in the name of Pocketbits allows
          buyers (“Buyers”) and sellers (“Sellers”), to buy and sell Bitcoins
          (for more information on Bitcoins, please refer to
          http://www.bitcoin.org).
        </Typography>
        <Typography variant="body1">
          Pocketbits allows all registered users of the Services (“Members”) to:
        </Typography>
        <ul>
          <li>
            Send and receive Bitcoins and Alt Coins from other Pocketbits
            Members or other users of Bitcoin and Alt Coins.
          </li>
          <li>Purchase and sell Bitcoins and Alt Coins.</li>
        </ul>
        <Typography variant="body1">
          It is possible that the laws in the country where the member resides
          and/or accesses Pocketbits App and Website do not allow the usage of
          an online tool with the characteristics of Bitcoin or any of its
          features. Pocketbits does not encourage the violation of any laws and
          cannot be held responsible for violation of such laws. It is the duty
          and responsibility of the member to follow the laws of the country of
          residence. As long as you agree to and comply with these Terms of Use,
          Pocketbits grants you a personal, non-exclusive, non-transferable,
          non-sublicensable, and limited right to enter and use Pocketbits App
          and Website.
        </Typography>
      </Box>
      <Box className={classes.partition}>
        <Typography variant="h3" className={classes.subHeading}>
          TAXES
        </Typography>
        <Typography>
          It is your responsibility to determine, collect, report, and submit
          any taxes applicable to the payments You make or receive in connection
          with the use of the Site, the App and the Service to the appropriate
          tax authority. PocketBits is not responsible for determining whether
          taxes apply to your transaction, or for collecting, reporting or
          remitting any taxes arising from any transaction.
        </Typography>
      </Box>
      <Box className={classes.partition}>
        <Typography variant="h3" className={classes.subHeading}>
          ASSOCIATED RISKS / RISK OF USING POCKETBITS SERVICES / INVESTMENT RISK
        </Typography>
        <Typography variant="overline">
          The use of pocketbits app and website may entail the following risks:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              Bitcoin transactions are irreversible. The Bitcoins you buy will
              be sent to your Pocketbits wallet or to the Bitcoin address
              provided by you. If you lose or delete your own bitcoin wallet,
              you will lose your Bitcoins in it and the same cannot be restored.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Bitcoin value is volatile and keeps on increasing or decreasing.
              Bitcoins are subject to large swings in value and may even become
              worthless. There is an inherent risk that losses will occur as a
              result of buying, selling or trading in Bitcoins.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Bitcoin is an as-yet autonomous and largely unregulated worldwide
              system of value transfer between individuals. It is not backed by
              any government or central bank backed currencies.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              There is also the risk of loss of confidence in Bitcoin trading,
              which could collapse demand relative to supply. For example,
              confidence might collapse in Bitcoin because of unexpected changes
              imposed by the software developers, the creation of superior
              competing alternatives, a deflationary or inflationary spiral, or
              due to governmental actions. Confidence might also collapse
              because of technical problems, for instance, if the anonymity of
              the system is compromised, or if any entity is able to prevent any
              transactions from settling.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Bitcoin transactions are irreversible. The Bitcoins you buy will
              be sent to your Pocketbits wallet or to the Bitcoin address
              provided by you. If you lose or delete your own bitcoin wallet,
              you will lose your Bitcoins in it and the same cannot be restored.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              There may be additional risks that might not have been foreseen or
              identified in these Terms of Use.
            </Typography>
          </li>
        </ul>
        <Typography variant="body1">
          You should carefully assess whether your financial situation and
          tolerance for risk is suitable for buying, selling or trading
          Bitcoins.
        </Typography>
        <Typography variant="body1">
          We use our banking service providers only for the receipt of client
          money and making payments. Our banking service providers do not
          transfer Bitcoins, exchange Bitcoins, or provide any services in
          connection with Bitcoins.
        </Typography>
      </Box>
      <Box className={classes.partition}>
        <Typography variant="h3" className={classes.subHeading}>
          PROHIBITED USAGE / LIMITED RIGHT OF USE / LIMITED LICENCE
        </Typography>
        <Typography variant="overline">
          Unless otherwise specified, all materials on Pocketbits App and
          Website are the property of Pocketbits and are protected under
          copyright, trademark and other applicable laws. You may view, print,
          and/or download a copy of such Materials on any single computer solely
          for your personal, informational, non-commercial use, provided you
          keep intact all copyright and other proprietary notices.
        </Typography>
        <Typography variant="overline">
          The trademarks, service marks and logos of Pocketbits and others used
          in Pocketbits and Services (“Trademarks”) are the property of
          Pocketbits and their respective owners. The software, text, images,
          graphics, data, prices, trades, charts, graphs, video, and audio used
          on this Website belong to Company. The trademarks and materials should
          not be copied, reproduced, modified, republished, uploaded,
          transmitted, collected or distributed in any form or by any means,
          whether manual or automated. Any unauthorized use of such property may
          violate copyright, trademark, and other applicable laws and could
          result in criminal or civil legal actions and penalties.
        </Typography>
      </Box>
      <Box className={classes.partition}>
        <Typography variant="h3" className={classes.subHeading}>
          USER CONDUCT CONSTRAINTS
        </Typography>
        <Typography variant="body1">
          While using PocketBits you agree that under any circumstance you will
          not resort to:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              Attempt to disrupt or tamper with PocketBits servers in ways that
              could harm our Website or Service, to place undue burden on
              PocketBits servers through automated means, or to access
              PocketBits Service in ways that exceed your authorization.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Violate the privacy of any third party, such as by posting another
              person's personal information without consent.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Impersonate any person or entity, including our employees.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Creation and maintenance of all Content in your Account shall be
              your sole responsibility.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              You are responsible for safeguarding the password that you use as
              a part of your Account Information to access the Services and for
              any activities or actions under your Account.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              You shall provide us with only such information (including without
              limitation Identification Documents submitted by you) that is true
              and accurate to the best of your knowledge.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              You shall not cancel any orders initiated but not executed on the
              exchange. In case any order is partially executed, we may in our
              sole discretion permit cancellation of the unexecuted order. You
              acknowledge that all orders and/or transactions are irreversible
              once executed.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              You acknowledge PocketBits does not exercise any control over the
              market price or circulation or volatility of the Digital Assets.
            </Typography>
          </li>
        </ul>
      </Box>
      <Box className={classes.partition}>
        <Typography variant="h3" className={classes.subHeading}>
          TERMINATION OF AGREEMENT
        </Typography>
        <Typography variant="body1">
          You agree that PocketBits shall have the right to immediately suspend
          your account (and any accounts beneficially owned by related entities
          or affiliates), freeze or lock the funds in all such accounts, and
          suspend your access to PocketBits for any reason including if it
          suspects any such accounts to be in violation of these Terms, our
          Privacy Policy, or any applicable laws and regulations. You agree that
          PocketBits shall not be liable to you for any permanent or temporary
          modification, suspension or termination of your Account or access to
          all or any portion of the Services. PocketBits shall have the right to
          keep and use the transaction data or other information related to such
          accounts.
        </Typography>
        <Typography variant="overline">
          The above account controls may also be applied in the following cases:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              The account is subject to a governmental proceeding, criminal
              investigation or other pending litigation;
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              We detect unusual activity in the account;{" "}
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              We detect unauthorized access to the account;
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              We are required to do so by a court order or command by a
              regulatory/government authority.
            </Typography>
          </li>
        </ul>
        <Typography variant="body1">
          In case of any of the following events, PocketBits shall have the
          right to directly terminate this agreement by cancelling your Account,
          and shall have the right to permanently freeze (cancel) the
          authorizations of your account on PocketBits and withdraw the
          corresponding PocketBits Account thereof:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              After PocketBits terminates services to you;
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              You allegedly register or register in any other person’s name as
              PocketBits user again, directly or indirectly;
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              The information that you have provided is untruthful, inaccurate,
              outdated or incomplete;
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              When these Terms are amended, you expressly state and notify
              PocketBits of your unwillingness to accept the amended Terms;
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              You request that the Services be terminated; and
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Any other circumstances where PocketBits deems it should terminate
              the services.
            </Typography>
          </li>
        </ul>
        <Typography variant="body1">
          Should your Account be terminated, the Account and transactional
          information required for meeting data retention standards will be
          securely stored for 5 years. In addition, if a transaction is
          unfinished during the Account termination process, PocketBits shall
          have the right to notify your counterparty of the situation at that
          time.
        </Typography>
        <Typography variant="body1">
          If PocketBits receives notice that any funds held in your Account are
          alleged to have been stolen or otherwise are not lawfully possessed by
          you, PocketBits may, but has no obligation to, place an administrative
          hold on the affected funds and your Account. If PocketBits does place
          an administrative hold on some or all of your funds or Account,
          PocketBits may continue such hold until such time as the dispute has
          been resolved and evidence of the resolution acceptable to PocketBits
          has been provided to PocketBits in a form acceptable to PocketBits.
          PocketBits will not involve itself in any such dispute or the
          resolution of the dispute. You agree that PocketBits will have no
          liability or responsibility for any such hold, or for your inability
          to withdraw funds or execute trades during the period of any such
          hold.
        </Typography>
      </Box>

      <Box className={classes.partition}>
        <Typography variant="h3" className={classes.subHeading}>
          DISCLAIMER
        </Typography>
        <Typography variant="body1">
          Your use of the Service is at your sole risk. The Service is provided
          is without warranties of any kind, whether express or implied,
          including, but not limited to, implied warranties of merchantability,
          fitness for a particular purpose, non-infringement or course of
          performance.
        </Typography>
        <Typography variant="overline">
          We and our subsidiaries, affiliates, and our licensors do not warrant
          that:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              the Service will function uninterrupted, secure or available at
              any particular time or location
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              any errors or defects will be corrected
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              the Service is free of viruses or other harmful components
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              the results of using the Service will meet your requirements.
            </Typography>
          </li>
        </ul>
      </Box>
      <Box className={classes.partition}>
        <Typography variant="h3" className={classes.subHeading}>
          AMENDS TO THE ONLINE PLATFORMS
        </Typography>
        <Typography variant="body1">
          We may update the PocketBits Online Platforms from time to time, and
          may change the Content at any time. However, please note that any of
          the Content on the PocketBits Online Platforms may be out of date at
          any given time and we are under no obligation to update it.
        </Typography>
        <Typography variant="body1">
          We do not guarantee that the PocketBits Online Platforms, or any
          Content on it, will be free from errors or omissions.
        </Typography>
      </Box>
      <Box className={classes.partition}>
        <Typography variant="h3" className={classes.subHeading}>
          AMENDS TO THESE TERMS AND CONDITIONS
        </Typography>
        <Typography variant="body1">
          We may revise these Terms at any time by amending this page. Please
          check this page from time to time to take notice of any changes we
          made, as they are binding on you.
        </Typography>
        <Typography variant="body1">
          We may, without prior notice, change the Services; add or remove
        </Typography>
      </Box>
      <Box className={classes.partition}>
        <Typography variant="h3" className={classes.subHeading}>
          PRIVACY
        </Typography>
        <Typography variant="body1">
          Please refer to our Privacy Policy for information about how we
          collect, use and disclose information and data{" "}
          <ScrollLink to="applicable" smooth spy>
            <Typography variant="caption" color="primary">
              <b>“Click Here”</b>
            </Typography>
          </ScrollLink>
        </Typography>
        <Typography variant="body1">
          We may, without prior notice, change the Services; add or remove
        </Typography>
      </Box>
      <Box className={classes.partition}>
        <Typography variant="h3" className={classes.subHeading}>
          CONTACT US
        </Typography>
        <Typography variant="body1">
          If you have any questions relating to the Privacy Policy, please
          contact us at{" "}
          <Typography variant="h6" color="primary">
            <b>support@pocketbits.in</b>
          </Typography>
        </Typography>
      </Box>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    width: "70%",
    margin: "0 auto",
  },
  subHeading: {
    paddingBottom: "20px",
    textTransform: "capitalize",
  },
  partition: {
    paddingBottom: "20px",
  },
}));

export default TermsAndConditionsBody;
