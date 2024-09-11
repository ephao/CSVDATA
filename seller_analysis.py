import csv
from decimal import Decimal
from datetime import datetime
import json

def analyze_sellers(input_csv, output_csv):
    owners = {}
    
    with open(input_csv, 'r') as file:
        reader = csv.DictReader(file, skipinitialspace=True)
        for row in reader:
            owner = row['Owner']
            side = row['Side']
            volume_usd = Decimal(row['VolumeUSD'])
            timestamp = datetime.strptime(row['Timestamp'], '%Y-%m-%d %H:%M:%S')
            
            if owner not in owners:
                owners[owner] = {'profit': Decimal('0'), 'has_bought': False, 'transactions': []}
            
            owners[owner]['transactions'].append({
                'side': side,
                'volume_usd': volume_usd,
                'timestamp': timestamp.isoformat()
            })
            
            if side == 'buy':
                owners[owner]['profit'] -= volume_usd
                owners[owner]['has_bought'] = True
            elif side == 'sell':
                owners[owner]['profit'] += volume_usd
    
    # Export results to JSON
    with open(output_csv, 'w') as file:
        json.dump({
            owner: {
                'profit': float(data['profit']),
                'has_bought': data['has_bought'],
                'transactions': data['transactions']
            } for owner, data in owners.items()
        }, file, indent=2)
    
    print(f"Seller analysis data has been exported to {output_csv}")
