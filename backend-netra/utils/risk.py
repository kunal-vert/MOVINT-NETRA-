# This isn't the play role in DB directly here we will calc the risk score  consider parameters

# Calling upon the Immigration Router only 

HIGH_RISK_OCCUPATIONS = {"journalist", "researcher", "activist", "ngo worker", "photographer", "missionary", " war-Veterans","filmmaker"}

HIGH_RISK_NATIONALITIES = {"china", "pakistan", "myanmar", "bangladesh","afghanistan"}

def compute_risk (data: dict, past_visits: list) -> dict:
    score = 0
    reasons = []

    # Current records check

      
    # 1. Criminal record
    if data.get("criminal_record"):
    #we are using the .get cause data = {
    #"criminal_record": True# }
        score += 40
        reasons.append("Criminal record on file")

    # 2. Occupation
    occ = str(data("occupation" or "")).lower().strip()
    if occ in HIGH_RISK_OCCUPATIONS:
        score +=20
        reasons.append(f"Sensitive occupation: {occ}")  


    # 3. Nationality
    nat = str(data.get("nationality", "")).lower().strip()
    if nat in HIGH_RISK_NATIONALITIES:
        score += 15
        reasons.append(f"High-risk nationality: {nat}")


    # 4. Prior NE visit frequency 
    #  here in future we have to add more parameters like if subject goin' into same place with certain area of radius ... Though this will be ML part...:)   

  

    prior = int(data.get("prior_ne_visits") or 0)
    if prior > 5:
        score += 15
        reasons.append(f"Frequent prior NE visits: {prior}")
    elif prior > 2:
        score += 7
        reasons.append(f"Multiple prior NE visits: {prior}")


    for v in past_visits:
        if v.overstayed:
            score += 25
            reasons.append("Overstay on a previous visit")


        if v.flagged:
            score += 30
            reasons.append("Flagged activity in a previous visit")



    if score >= 60:
        level = "HIGH"
    elif score >= 30:
        level = "MEDIUM"
    else:
        level = "LOW"

    return {
        "risk_score":  min(score, 200),
        "risk_level":  level,
        "risk_reason": " | ".join(reasons) if reasons else "No risk detected"
    }        
    





