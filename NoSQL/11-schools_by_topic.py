#!/usr/bin/env python3
"""
Lists all schools with a specific topic
"""

def schools_by_topic(mongo_collection, topic):
    """
    function that lists all schools with a specific topic
    """
    if mongo_collection is None:
        return 
    
    return list(mongo_collection.find({ "topics": topic }))
