# This isn't the play role in DB directly here we will calc the risk score  consider parameters

# Calling upon the Immigration Router only 

HIGH_RISK_OCCUPATIONS = {"journalist", "researcher", "activist", "ngo worker", "photographer", "missionary", " War Veterans","Filmmaker"}

HIGH_RISK_NATIONALITIES = {"china", "pakistan", "myanmar", "bangladesh","afghanistan"}

def compute_risk (data: dict, past_visits: list) -> dict:
    score = 0
    reasons = []

    # Current records check
     
    if data.get("criminal_record"):
#     we are using the .get cause data = {
#     "criminal_record": True# }
        score += 40
        reasons.append("Criminal record on file")


    occ = data["occupation"].lower().strip()
    if occ in HIGH_RISK_OCCUPATIONS:
        score +=20
        reasons.append(f"Sensitive occupation: {occ}")  



    nat = data.get("nationality").lower().strip()
    if nat in HIGH_RISK_NATIONALITIES:
        score += 15
        reasons.append(f"High-risk nationality: {nat}")
