#!/usr/bin/env python3
"""
Module that provides statistics about Nginx logs stored in a MongoDB database.
"""

from pymongo import MongoClient


def log_stats():
    """
    Prints statistics about Nginx logs stored in the 'logs' database
    and 'nginx' collection.
    """
    client = MongoClient()
    db = client.logs
    collection = db.nginx

    total = collection.count_documents({})
    print(f"{total} logs")

    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]

    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    total_check = collection.count_documents({"method": "GET",
                                              "path": "/status"})
    print(f"{total_check} status check")


if __name__ == "__main__":
    log_stats()
