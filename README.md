# Wormy
A Discord Bot designed for EVE Online wormhole announcements.

# Setup
Insure you update the TOKEN field in the .env file with your registered bot.

# Usage
EVE Online Wormholes have an ID which consists of a Letter/Number combination such as X003 or N432.

Wormy was designed to look up wormholes statisics (how much mass and how large ships can pass) and then annouce it in Discord for your Corp.

It also provides some quick math on how many trips to move WH Rolling Sigils (Amarr T1 Industry Ship) through to close the wormhole.  These Sigils are cheap to manufacture and need a Higgs rig, as well as a 100MN Afterburner to reach a mass of 122,000,000K Tons.  The ship is considered "HOT" when the afterburner is on and "COLD" when it is off.  Cold, the ship has 22,000K T mass.

```!wormy <WH Identifier> <SYSTEM> (optional)```

## Example
```!wormy Q003 Jita```
```!wormy N432```
  
